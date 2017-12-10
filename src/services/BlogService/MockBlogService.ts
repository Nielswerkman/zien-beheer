import { IBlogService } from 'services/BlogService/IBlogService';
import { Blog } from 'models/blog';
import {Observable} from 'rxjs/Observable';

export class BlogService {
  post(object: Blog): Observable<boolean> {
    return undefined;
  }

  put(object: Blog): Observable<boolean> {
    return undefined;
  }

  get(id: number): Observable<Blog> {
    return undefined;
  }

  getAll(): Observable<Blog[]> {
    return undefined;
  }

  delete(id: number): Observable<boolean> {
    return undefined;
  }
}
