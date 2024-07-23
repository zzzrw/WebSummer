import { Controller, Get, Param } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}

@Controller('/test')
export class TestController {
  @Get('/:id')
  async test(@Param("id") id: string): Promise<string> {
    console.log(id);
    return 'It\'s a test';
  }
}
