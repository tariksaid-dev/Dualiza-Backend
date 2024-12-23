import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { News } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class NewsService {
  private readonly logger = new Logger('NewsService');

  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto) {
    try {
      const news = this.newsRepository.create(createNewsDto);
      await this.newsRepository.save(news);

      return news;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return await this.newsRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(term: string) {
    const searchCriteria = !isNaN(Number(term))
      ? { id: Number(term) }
      : { slug: term };

    const $new = await this.newsRepository.findOneBy(searchCriteria);

    if (!$new) {
      throw new NotFoundException(`No se encuentra la noticia con ${term}.`);
    }

    return $new;
  }

  async update(id: string, updateNewsDto: UpdateNewsDto) {
    const $new = await this.newsRepository.preload({
      id: +id,
      ...updateNewsDto,
    });

    if (!$new) throw new NotFoundException(`Product with id: ${id} not found`);

    try {
      await this.newsRepository.save($new);
      return $new;
    } catch (error) {
      {
        this.handleDBExceptions(error);
      }
    }
  }

  async remove(id: string) {
    const new$ = await this.findOne(id);

    await this.newsRepository.remove(new$);
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllNews(): Promise<DeleteResult> {
    const query = this.newsRepository.createQueryBuilder('news');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
