import {  Controller, Get } from '@nestjs/common';
import { Book } from 'src/interfaces/book.interface';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }
}
