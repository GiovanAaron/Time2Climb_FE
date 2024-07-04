import ModalSelector from 'react-native-modal-selector'
import styles from "../style-sheets/session-style"

export default SelectorWrapper = ({data, disabled, handler, children}) => {

    return (
        <ModalSelector

            optionContainerStyle={styles.optionContainerStyle}
            optionTextStyle={styles.optionTextStyle}
            sectionStyle={styles.sectionStyle}
            sectionTextStyle={styles.sectionTextStyle}
            cancelContainerStyle={styles.cancelContainerStyle}
            cancelTextStyle={styles.cancelTextStyle}

            data={data}
            disabled={disabled}
            cancelText="Cancel"
            initValue="Climbing Works"
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={handler}
        >
            {children}
        </ModalSelector>
    )

}