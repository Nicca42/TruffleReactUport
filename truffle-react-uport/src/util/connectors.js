import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('ReactUportTruffle', {
    clientId: '2ottHCb1Q26vupJgaVC5GNwEy5rCMdbqrhw',//get from app code in uport
    network: 'rinkeby',
    signer: SimpleSigner('fe777ca73b082463b455c0c8ace47368782c0e4ae20b01bd6cf906d5a5af9ebc')
})

export const web3 = uport.getWeb3()


