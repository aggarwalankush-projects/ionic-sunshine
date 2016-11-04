import {Injectable} from "@angular/core";
import {Sql} from "./sql";

@Injectable()
export class DatabaseService {

  constructor(public _db: Sql) {
    this.get('location').then(val=> {
      if (!val) {
        this.set('location', '95134');
      }
    });
    this.get('timeFormat').then(val=> {
      if (!val) {
        this.set('timeFormat', '12');
      }
    });
    this.get('metric').then(val=> {
      if (!val) {
        this.set('metric', 'F');
      }
    });
  }

  set(key: string, value: string): Promise<boolean> {
    return this._db.set(key, value)
      .then(()=> true)
      .catch(err=> {
        console.error('[Error] Saving ' + key + ' - ' + JSON.stringify(err));
        return false;
      });
  }

  get(key: string): Promise<string> {
    return this._db.get(key)
      .then(value=> {
        if (value) {
          return value;
        } else {
          throw new Error('Undefined value');
        }
      })
      .catch(err=> {
        console.error('[Error] Getting ' + key + ' - ' + JSON.stringify(err));
        return null;
      });
  }

}
