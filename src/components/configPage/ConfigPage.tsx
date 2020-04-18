
import React from 'react';
import './ConfigPage.scss';
import { Checkbox, Button } from 'antd';
import { connect } from 'react-redux';
import { setUserChoices, setUserSelections } from 'shared/reducers/user/user.reducer';
import { plainOptions, userChoices } from 'shared/utilities/constants';
import _ from 'lodash';
const CheckboxGroup = Checkbox.Group;

interface IConfigPageProps {
    userSelections: any[];
};

interface IState {
    checkedList: any[];
}

type IProps = IConfigPageProps & IStateToProps & IDispatchToProps;

class ConfigPage extends React.Component<IProps, IState> {  

    constructor(props: IProps) {
        super(props);
        this.state = {
            checkedList: props.userSelections
        }
    }

  onChange = (checkedList:any[]) => {
      this.setState({checkedList});
      this.props.setUserSelections(checkedList);
      }; 
      
    onSubmitClick = () => {
        const { checkedList } = this.state;
        const menuList: any[] = [userChoices[0]];
        checkedList.forEach(i => {
            const item = _.find(userChoices, {displayName:i});
            console.log(item);
            item && menuList.push(item);
        })
     console.log(menuList);
     this.props.setUserSelections(checkedList);
     this.props.setUserChoices(menuList);
    };
  
  render() {
    return(<>
        <h1 className="page-header"> Show Pages </h1>
        <CheckboxGroup
         options={plainOptions}
         value={this.state.checkedList}
         onChange={this.onChange}
         />
        <br />
        <Button 
         className="submit-btn"
         type="primary"
         htmlType="submit"
         onClick={this.onSubmitClick}>
         Submit
        </Button>
    </>); 
  }   
}

const mapDispatchToProps = (dispatch: any) => ({
    setUserChoices: (userChoices:any[]) => dispatch(setUserChoices(userChoices)),
    setUserSelections: (userSelections: any[]) => dispatch(setUserSelections(userSelections))
});

interface IDispatchToProps {
    setUserChoices: (userChoices:any[]) => Promise<any>;
    setUserSelections: (userSelections: any[]) => Promise<any>
}

interface IStateToProps {
    userChoices: [];
    userSelections: [];
}
export const mapStateToProps = (storeState: any) => ({
  userChoices: storeState.user.userChoices,
  userSelections: storeState.user.userSelections
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigPage)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;

