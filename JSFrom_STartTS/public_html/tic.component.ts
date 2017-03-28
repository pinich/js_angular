
class TicComponent {
    currentPlayer:string;
    rows:any;

    constructor() {
      this.initBoard();
    }

    public cellClicked(cell:Cell) {
        if(cell.val) {
            return;
        }

        cell.val = this.currentPlayer;
        this.currentPlayer = (this.currentPlayer=="X" ? "0" : "X");
    }

    public start() {
        this.initBoard();
    }

    private initBoard(){
        this.currentPlayer = "X";
        this.rows =[];

        for(var y=0; y<3; y++) {
            var row = [];
            this.rows.push(row);

            for(var x=0; x<3; x++) {
                row.push(new Cell(x, y));
            }
        }
    };


}

class Cell{
  public x:number;
  public y:number;
  public val:string;

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.val = undefined;
  }
}

appModule.component("myTic", {
    templateUrl: "tic.component.html",
    controller: TicComponent,
});
