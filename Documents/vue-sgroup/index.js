// // class Stack{
// //     constructor(){
// //         this.items = []
        
// //     }
// //  pushItems(element){
// //     this.items.push(element)
// //  }
// //  popItems(){
// //    return this.items.pop()
// //  }
// //  peek(){
// //     return this.items[this.items.length - 1]
// //  }
// //  isEmpty(){
// //     return this.items.length === 0
// //  }
// //   size(){
// //     return this.items.length
// //   }
// // reverse(){
// //     let char = this.items.toString().split("")
// //       let char2 = ''
// //     for(let i = char.length - 1 ; i >= 0;i--){
// //       char2 += char[i]

// //     }
// //     return char2;
// // }

// //   print(){
// //     console.log(this.items)
// //   }

 


// // }
// //  let stack = new Stack()
// //  stack.pushItems("iu em")
// //  console.log(stack.reverse())
// //  console.log(stack.size())
// //  stack.print()

// function xiLat(sum) {
//   let sum2 = 0;
  
//   for (let i = 0; i < sum.length; i++) {
//     sum2 += sum[i];
//   }
  
//   if (sum2 <= 21) {
//     return sum2;
//   } else {
//     return 0;
//   }
// }

// console.log(xiLat([12, 2,21])); // Kết quả: 14