import { IPayment } from "../interfaces/IPayment";

class Database {
  db!: IDBDatabase;
  constructor() {
    if (!indexedDB) {
      console.log(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
      return;
    }
    const request = indexedDB.open("finance", 1);
    request.onerror = function (event) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = () => {
      this.db = request.result;
      this.initStores();
    };
    request.onupgradeneeded = () => {
      let db = request.result;
      if (!db.objectStoreNames.contains("types")) {
        db.createObjectStore("types", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("items")) {
        db.createObjectStore("items", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("payments")) {
        db.createObjectStore("payments", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
  }
  insert(value: IPayment) {
    const { types, items, payments } = this.initStores();
    this.checkForNewTypes(value, types);
    this.checkForNewItems(value, items);
    console.log(value);
  }
  private checkForNewTypes(value: IPayment, storeObject: IDBObjectStore) {
    if (value.type[0].customOption)
      value.type[0] = storeObject.add({
        label: value.type[0].customOption.label,
      });
    console.log(value.type[0]);
  }

  private checkForNewItems(value: IPayment, storeObject: IDBObjectStore) {}

  private initStores() {
    let transaction = this.db.transaction(
      ["types", "items", "payments"],
      "readwrite"
    );
    return {
      types: transaction.objectStore("types"),
      items: transaction.objectStore("items"),
      payments: transaction.objectStore("payments"),
    };
  }
}

export default new Database();
