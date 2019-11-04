/*
  modal([react component])
  Usage:
    Put <ModalWrapper/> before you call modal()
    Just simply use onClick={() => modal(<jsx/>)}
*/
import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const getter = {
    func: [],
    add (callback) {
        this.func.push(callback)
        return this
    },
    remove () {
        this.func = []
        return this
    }
}

const Modal = (props) => (
    <div className={props.classes.dialog} >
        <div
            className={props.classes.modalContent}
            onClick={e => e.stopPropagation()}
        >
            {props.children}
        </div>
    </div>
)

const StyledModal = injectSheet(style)(Modal)

class ModalWrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false,
            modal: null
        }
        this.addModal = this.addModal.bind(this)
        this.removeModal = this.removeModal.bind(this)
    }
    componentDidMount () {
        getter
            .add(this.addModal)
            .add(this.removeModal)
    }
    componentWillUnmount () {
        this.setState = () => {}
        getter.remove()
    }
    addModal (content) {
        document.body.style.overflowY = 'hidden'
        this.setState({ open: true, modal: content })
    }
    removeModal () {
        document.body.style.overflowY = 'auto'
        this.setState({ open: false })
    }
    render () {
        const {classes} = this.props
        return (
            <div className={this.state.open ? classes.modalOn : classes.modalOff} onClick={this.removeModal}>
                {
                    this.state.open &&
            <StyledModal>
                {this.state.modal}
            </StyledModal>
                }
            </div>
        )
    }
}

const modal = (content) => {
    getter.func[0](content)
}

const closeModal = () => {
    getter.func[1]()
}

const StyledModalWrapper = injectSheet(style)(ModalWrapper)

export { StyledModalWrapper as ModalWrapper, StyledModal as Modal, modal, closeModal }
