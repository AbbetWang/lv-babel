(()=>{
    console.log(33)
})()

const a = new Promise(()=>{console.log(1)})

async function sleep(duration){
    return new Promise(resolve=>{
        setTimeout(() => {
        resolve()
        }, duration);
    })
}
async function main(){
    console.log("sleep")
    await sleep(5000)
    console.log("weak")
}

main()