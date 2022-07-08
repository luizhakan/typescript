import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { newsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService {
    async get(_id: string){
        let result = await newsRepository.findById(_id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result>{
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await newsRepository.count({});
        result.Data = await newsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }
}