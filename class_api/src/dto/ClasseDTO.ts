import {Classe} from '../app/models/Classe';

export interface ClasseDTO extends Classe{
	  last_comment:string;
	  last_comment_date:Date;
}
