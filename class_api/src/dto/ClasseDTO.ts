import {Classe} from '../app/models/Classe';
import { Comment } from '../app/models/Comment';

export interface ClasseDTO extends Classe{
	  last_comment:string;
	  last_comment_date:Date;
		comments:Comment[];
}
