import { useState } from 'react'

import { BsFillSkipEndFill } from 'react-icons/bs'
import { FaFileSignature } from 'react-icons/fa'
import { Button, Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const SignatureForm: React.FC = () => {

    const { t } = useTranslation()
    const [isOpenSignatureTab, setIsOpenSignatureTab] = useState(false)

    const handleSignatureTab = () => setIsOpenSignatureTab(!isOpenSignatureTab)

    return (
        
        <>
            {
                isOpenSignatureTab ? (
                    <Tabs variant='soft-rounded' colorScheme='blue' >
                        <TabList display='flex' justifyContent='space-around' w={[190, 300, 350, 360, 500]}>
                            <Tab>{t('signaturePadTab')}</Tab>
                            <Tab>{t('signatureTypeTab')}</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                ) : (
                    <Stack direction={['column', 'row']} spacing={4}>
                        <Button leftIcon={<FaFileSignature />} colorScheme='blue' variant='solid' onClick={handleSignatureTab}>
                            { t('addSignature') }
                        </Button>
                        <Button rightIcon={<BsFillSkipEndFill />} colorScheme='blue' variant='outline'>
                            { t('skip') }
                        </Button>
                    </Stack>
                )
            }
        </>

    )

}
