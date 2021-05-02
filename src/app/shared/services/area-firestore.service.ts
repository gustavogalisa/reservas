import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Area} from '../model/area';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaFirestoreService {

  colecaoAreas: AngularFirestoreCollection<Area>;
  NOME_COLECAO = 'areas';

  constructor(private afs: AngularFirestore) {
    this.colecaoAreas = afs.collection(this.NOME_COLECAO);
  }

  list(): Observable<Area[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoAreas.valueChanges({idField: 'id'});
  }

  create(area: Area): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete area.id;
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    // console.log(from(this.colecaoAreas.add(Object.assign({}, area))));
    return from(this.colecaoAreas.add(Object.assign({}, area)));
  }
  remover(id: string): Observable<void> {
    return from(this.colecaoAreas.doc(id).delete());
  }

 // pesquisarPorId(id: string): Observable<Area> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
//    return this.colecaoAreas.doc(id).get().pipe(map(document => new Area(document.id, document.data())));
//  }

  update(area: Area): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete area.id;
    return from(this.colecaoAreas.doc(area.id).update(Object.assign({}, area)));
  }
}
