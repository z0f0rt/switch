import {prisma} from "../database/db"
async function switchState(futureState) {
    if(futureState === null){
        const currentState = await prisma.state.findFirst()
return 
    }
}