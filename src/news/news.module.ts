import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { News } from './entities/news.entity';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [TypeOrmModule.forFeature([News])],
  exports: [NewsService],
})
export class NewsModule {}
