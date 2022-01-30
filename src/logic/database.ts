import { IPayment } from "../interfaces/IPayment";
import { openDB } from "idb";
import { Option } from "react-bootstrap-typeahead/types/types";
import { Dispatch, SetStateAction } from "react";

class Database {
  db!: any;
  constructor() {
    openDB("finance", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("types")) {
          db.createObjectStore("types", {
            keyPath: "id",
            autoIncrement: true,
          });
        }
        if (!db.objectStoreNames.contains("items")) {
          db.createObjectStore("items", {
            keyPath: "id",
            autoIncrement: true,
          });
        }
        if (!db.objectStoreNames.contains("payments")) {
          db.createObjectStore("payments", {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      },
    })
      .then((db) => {
        this.db = db;
      })
      .catch((err) =>
        console.log("Why didn't you allow my web app to use IndexedDB?!")
      );
  }
  async insert(
    value: IPayment,
    setTypes: Dispatch<SetStateAction<Option[]>>,
    setItems: Dispatch<SetStateAction<Option[]>>
  ) {
    await this.checkForNewTypes(value, setTypes);
    await this.checkForNewItems(value, setItems);
    this.db.add("payments", value);
    console.log(value);
  }

  async getItems(): Promise<Option[]> {
    const db = await openDB("finance", 1);
    const items = await db.getAll("items");
    return items;
  }

  async getTypes(): Promise<Option[]> {
    const db = await openDB("finance", 1);
    const types = await db.getAll("types");
    return types;
  }

  private async checkForNewTypes(
    value: IPayment,
    setTypes: Dispatch<SetStateAction<Option[]>>
  ) {
    if (value.type[0].customOption) {
      delete value.type[0].customOption;
      value.type[0].id = await this.db.add("types", {
        label: value.type[0].label,
      });
      setTypes((old) => [...old, value.type[0]]);
    }
  }

  private async checkForNewItems(
    value: IPayment,
    setItems: Dispatch<SetStateAction<Option[]>>
  ) {
    await Promise.all(
      value.items.map(async (item) => {
        if (item.customOption) {
          delete item.customOption;
          item.id = await this.db.add("items", {
            label: item.label,
          });
          setItems((old) => [...old, item]);
        }
      })
    );
  }
}

export default new Database();
