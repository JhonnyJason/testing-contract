const Counter = artifacts.require("Counter")

function olog(obj){
    console.log(JSON.stringify(obj, null, 4))
}

contract("PrivateCounter", (accounts) => {

    //############################################################
    it("...read out some.", async () => {
        const c = await Counter.deployed()


        const w0 = accounts[0]
        const w1 = accounts[1]
        const w2 = accounts[2]
        const w3 = accounts[3]

        const o0 = ""
        const o1 = ""

        const IDoWork = await c.doIwork()
        olog({IDoWork})

        const countW0 = await c.getPrivateCounts(w0)
        const countW1 = await c.getPrivateCounts(w1)
        const countW2 = await c.getPrivateCounts(w2)
        const countW3 = await c.getPrivateCounts(w3)
        
        const countO0 = await c.getPrivateCounts(w2)
        const countO1 = await c.getPrivateCounts(w3)

        olog({countW0})
        olog({countW1})
        olog({countW2})
        olog({countW3})

        olog({countO0})
        olog({countO1})

    })

    it("...write something.", async () => {
        const c = await PrivateCounter.deployed()

        const w0 = accounts[0]
        const w1 = accounts[1]
        const w2 = accounts[2]
        const w3 = accounts[3]

        const o0 = ""
        const o1 = ""

        const countW0 = await c.getPrivateCounts(w0)
        const countW1 = await c.getPrivateCounts(w1)
        const countW2 = await c.getPrivateCounts(w2)
        const countW3 = await c.getPrivateCounts(w3)
        
        const countO0 = await c.getPrivateCounts(w2)
        const countO1 = await c.getPrivateCounts(w3)

        olog({countW0})
        olog({countW1})
        olog({countW2})
        olog({countW3})

        olog({countO0})
        olog({countO1})

    })

})
