import { IBlogService } from 'services/BlogService/IBlogService';
import { Blog } from 'models/blog';

export class BlogService implements IBlogService {
    post(object: Blog): boolean {
        throw new Error("Method not implemented.");
    }
    put(object: Blog): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): Blog {
        throw new Error("Method not implemented.");
    }
    getAll(): Blog[] {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}
