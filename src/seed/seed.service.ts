import { Injectable } from '@nestjs/common';
import { NewsService } from 'src/news/news.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly newsService: NewsService) {}

  async runSeed() {
    await this.deleteTables();

    await this.insertNews();

    return 'Seed executed';
  }

  private async deleteTables() {
    await this.newsService.deleteAllNews();
  }

  private async insertNews(): Promise<boolean> {
    const insertPromises = [];

    initialData.news.forEach(($new) => {
      insertPromises.push(this.newsService.create($new));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
