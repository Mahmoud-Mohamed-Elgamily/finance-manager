class Database {
  db: IDBDatabase | undefined;
  constructor() {
    if (!window.indexedDB) {
      console.log(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
      return;
    }
    const request = window.indexedDB.open("finance", 1);
    request.onerror = function (event) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = () => {
      this.db = request.result;
    };
  }
  insert(value: {
    date: string;
    type: string;
    item: string;
    count: number;
    price: number;
  }) {
    console.log(value);
  }
}

export default new Database();
