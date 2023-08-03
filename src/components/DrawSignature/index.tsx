import { useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'
import SignaturePad from 'react-signature-canvas'

import { Container, BtnContainer, Cancel, Clear, Save } from './styles'
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

  return (

    <Container>
     
      <SignaturePad ref={sigPad} penColor="#3f7ae0" canvasProps={{className: 'signaturepad'}} />

      <BtnContainer>
        <Cancel type="button">{t('cancelSignature')}</Cancel>
        <Clear type="button" onClick={clearSignature}>{t('clearSignature')}</Clear>
        <Save type="button" onClick={saveSignature}>{t('saveSignature')}</Save>
      </BtnContainer>
    </Container>
      
  )
}
  