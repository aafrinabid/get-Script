import { createSlice } from "@reduxjs/toolkit";

const producers=[ { 
    id:1,
    name:'nolan',
    companyName:'nolaliza production',
    producerAssociationId:455562,
    accepted:false,
    Details:{
        experience:2,
        numberOfProduced:8,
        address:'nolaliza production,kanadikal, kerala',
        country:'India'

    }

}, { 
    id:2,
    name:'blastick',
    companyName:'blastick films',
    producerAssociationId:933432,
    accepted:false,
    Details:{
        experience:5,
        numberOfProduced:3,
        address:'blastick films,china, beijing',
        country:'China'

    }

},{ 
    id:3,
    name:'luli Pose',
    companyName:'Lp House',
    producerAssociationId:453447,
    accepted:false,
    Details:{
        experience:1,
        numberOfProduced:2,
        address:'lp,mattancheri, kerala',
        country:'India'

    }

},{ 
    id:4,
    name:'best andison',
    companyName:'andi and sons ',
    producerAssociationId:949932,
    accepted:false,
    Details:{
        experience:2,
        numberOfProduced:8,
        address:'andi and sons,kanadikal, kerala',
        country:'India'

    }

},{ 
    id:5,
    name:'walter',
    companyName:'dickney',
    producerAssociationId:633452,
    accepted:true,
    Details:{
        experience:10,
        numberOfProduced:88,
        address:'dickney,kanadikal, kerala',
        country:'India'

    }

},]

const ProducerSlice=createSlice({
    name:'ProducerHandler',
    initialState:{
     producers:producers
    },
    reducers:{
        addProducers(state,action){
            const existingProducerIndex=state.producers.findIndex((producer)=>producer.id===action.payload)
            const existingProducer=state.producers[existingProducerIndex]
            const UpdatedProducer={
                ...existingProducer,
                accepted:true
            }
            let updatedProducers=[...state.producers]
            updatedProducers[existingProducerIndex]=UpdatedProducer

            state.producers=updatedProducers

        },
        rejectProducers(state,action){
         let updatedProducers=state.producers.filter(producer=>producer.id!==action.payload)
         state.producers=updatedProducers
        }
    }
})



export const ProducerActions=ProducerSlice.actions;
export default ProducerSlice.reducer