import { useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'
import SignaturePad from 'react-signature-canvas'

import { ActionButton } from '../ActionButton'

import { Container, BtnContainer } from './styles'
import './signaturepad.css'

export const DrawSignature: React. FC = () => {

  const [, setBase64SignatureImg] = useState('')

  const { t } = useTranslation()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sigPad = useRef<any | undefined>({})

  const clearSignature = (): void => {
    sigPad.current.clear()
  }

  const saveSignature = (): void => {
    const signatureImage: string = sigPad.current.toDataURL()
    setBase64SignatureImg(signatureImage)
  }

  const cancel = (): void => console.log('cancel')

  return (

    <Container>
     
      <SignaturePad ref={sigPad} penColor="#3f7ae0" canvasProps={{className: 'signaturepad'}} />

      <BtnContainer>
        <ActionButton text={t('cancelSignature')} color="darkred" onClick={cancel} />
        <ActionButton text={t('clearSignature')} onClick={clearSignature} />
        <ActionButton text={t('saveSignature')} color="darkgreen" onClick={saveSignature} />
      </BtnContainer>
    </Container>
      
  )
}
  