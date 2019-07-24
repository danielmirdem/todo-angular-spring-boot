export class Todo{
  constructor(
      public id: number,
      public username: string,
      public description: string,
      public done: boolean,
      public targetDate: Date,
      public comment: string,
      public lastUpdate: Date
  ){
  }

}
