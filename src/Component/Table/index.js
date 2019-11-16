import React from 'react';
import {connect} from 'react-redux';
import { Container, TD, Link } from './style';

import { download } from '../../Redux/Action/exam';
import Header from './header';
import { modal } from '../Modal';
import UploadModal from '../Upload';
import Loading from '../Loading';

class Table extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: '點選左方課程尋找考古題',
      width: window.innerWidth
    };
    this.ref = React.createRef();
    this.onResize = this.onResize.bind(this);
  }

  onResize() {
    this.setState({width: window.innerWidth});
  }

  componentDidMount(){
    if(this.ref.current){
      window.addEventListener('resize', this.onResize);
    }
  }

  componentWillUnmount() {
    if(this.ref.current){
      window.removeEventListener('resize', this.onResize);
    }
  }

  componentDidUpdate(){
    if(this.ref.current){
      this.ref.current.scrollTo(0, 0);
    }
  }

  render () {
    const {data, loading} = this.props;
    const { width } = this.state;
    return (
      <Container ref={this.ref}>
        {loading && <Loading/>}
        {data.length > 0
          ? (
            <table>
              <Header width={width}/>
              <tbody>
                {
                  data.map(e =>
                    <tr key={e.id} onClick={() => download(e)}>
                      <TD>{e.semester}</TD>
                      <TD>{e.type}</TD>
                      { width >=976  && <TD>{e.instructor}</TD>}
                      { width >=576  && <TD>{e.filename}</TD>}
                    </tr>
                  )
                }
              </tbody>
            </table>
          )
          : loading === undefined
            ? <p>請點選左方課程列表</p>
            : !loading && <p>目前尚無考古題，<Link onClick={() => modal(<UploadModal />)}>歡迎上傳</Link></p>
        }
      </Container>
    );
  }
}

export default connect(state => ({
  loading: state.main.loading,
}))(Table);
