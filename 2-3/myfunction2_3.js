function myFunction1_2() {

  /** 軽減税率対応クラス*/
  class KeigenShohizei {

    /**
      * オーダー情報を受け取るコンストラクタ
      * @param {string} item 商品名
      * @param {number} price 商品価格
      * @param {number} quantity オーダー数
      */
    constructor(item, price, quantity) {
      this.item = item;
      this.price = price;
      this.quantity = quantity;
    }

    /**
      * 税率を計算するメソッド
      * @return {number} 税込価格
      */
    getIncludedTax() { return this.price * this.quantity * 1.08; }
  }


  /** 消費税対応クラス  */
  class NormalShohizei {

    /** 軽減税率対応クラスのコンストラクタを参照してください */
    constructor(item, price, quantity) {
      this.item = item;
      this.price = price;
      this.quantity = quantity;
    }

    /**
      * 税率を計算するメソッド
      * @return {number} 税込価格
      */
    getIncludedTax() { return this.price * this.quantity * 1.1; }
  }


  /**
   * 内税対応クラス
   */
  class Uchizei {

    /** 軽減税率対応クラスのコンストラクタを参照してください */
    constructor(item, price, quantity) {
      this.item = item;
      this.price = price;
      this.quantity = quantity;
    }

    /**
      * 税率を計算するメソッド
      * @return {number} 税込価格
      */
    getIncludedTax() { return this.price * this.quantity * 1; }
  }

  
  /** インスタンス化 */
  const order1 = new KeigenShohizei('かにみそ', 1000, 1)
  const order2 = new NormalShohizei('日本酒', 2000, 2)
  const order3 = new Uchizei('ヒグマの木彫り', 15000, 1)

  const orders = [order1, order2, order3];

  // すべてのオブジェクトでgetIncludedTax()を呼び出す
  for (const order of orders) {
    console.log(order.getIncludedTax()); //1080, 4400, 15000
  }

}
