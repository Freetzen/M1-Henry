function memoDrive(){
    let memo = {}
    let id = 1
    const saveEdit = {
        save: function(obj){
            let nameKey = `user_${id}`
            id++
            memo[nameKey] = obj
            return memo
        },
        edit: function(userId, name){
            console.log(memo[userId])
            memo[userId] = name
            return memo
        }

    }

    return saveEdit
    
}

const testMemo = memoDrive()
let obj1 = {name: 'Fede'}
let obj2 = {name: 'Martín'}

console.log(testMemo.save({name: 'Fede'}))
console.log(testMemo.save({name: 'Martín'}))
console.log(testMemo.edit('user_1', 'Agus'))
console.log(obj1)

