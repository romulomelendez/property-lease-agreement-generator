import { useState } from 'react'

import { BsFillSkipEndFill } from 'react-icons/bs'
import { FaFileSignature } from 'react-icons/fa'
import {
    Button,
    Stack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
 } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

import { DrawSignature } from '../DrawSignature'
import { TypeSignature } from '../TypeSignature'
import { FormTitle } from '../FormTitle'
// import { ConfirmationModal } from '../ConfirmationModal'

export const SignatureForm: React.FC = () => {

    const { t } = useTranslation()
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [isOpenSignatureTab, setIsOpenSignatureTab] = useState(false)

    const handleSignatureTab = () => setIsOpenSignatureTab(!isOpenSignatureTab)

    return (
        
        <>
            <FormTitle text={t("youWantToAddSignature")} />
            {
                isOpenSignatureTab ? (
                    <Tabs variant='soft-rounded' colorScheme='blue'>
                        <TabList display='flex' justifyContent='space-around' mb="1rem" w={[190, 300, 350, 360, 500]}>
                            <Tab w={['50%']} fontSize={{ base: '14px', md: '17px', lg: '20px' }}>
                                {t('signaturePadTab')}
                            </Tab>
                            <Tab w={['50%']} fontSize={{ base: '14px', md: '17px', lg: '20px' }}>
                                {t('signatureTypeTab')}
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <DrawSignature />
                            </TabPanel>
                            <TabPanel>
                                <TypeSignature />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                ) : (
                    <Stack direction={['column', 'row']} spacing={4}>
                        <Button leftIcon={<FaFileSignature />} colorScheme='blue' variant='solid' onClick={handleSignatureTab}>
                            { t('addSignature') }
                        </Button>
                        <Button rightIcon={<BsFillSkipEndFill />} colorScheme='blue' variant='outline' onClick={onOpen}>
                            { t('skip') }
                        </Button>
                    </Stack>
                )
            }
            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        { t('save&createPDF') }
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            { t('save') }
                        </Button>
                        <Button onClick={onClose} colorScheme='red'>
                            { t('cancel') }
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )

}
