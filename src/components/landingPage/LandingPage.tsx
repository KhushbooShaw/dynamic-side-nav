
import React from 'react';
import { Layout } from 'antd';
import './LandingPage.scss';
import SideNav from 'components/sideNav/SideNav';
import PageLayout from 'components/PageLayout/PageLayout';
import { connect } from 'react-redux';


interface ILandingPageProps {
    userChoices: any[];
};
interface IState {
    collapsed: boolean;
    userChoices: any[];
};

type IProps = ILandingPageProps & IStateToProps & IDispatchToProps;
class LandingPage extends React.Component<IProps,IState> {  
    constructor(props: IProps) {
        super(props);
        this.state = {
            collapsed: false,
            userChoices: props.userChoices
        }
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        const { userChoices } = this.props;
        if(prevProps.userChoices !== userChoices) {
            this.setState({userChoices});
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    render() { 
        
        const { collapsed, userChoices } = this.state;
        return(
            <Layout className="main-page-layout"> 
             <SideNav 
              collapsed={collapsed}
              userChoices={userChoices}
             /> 
             <PageLayout 
              collapsed={collapsed}
              toggle={this.toggle}
             /> 
            </Layout>
        );
    }  
}

const mapDispatchToProps = (dispatch: any) => ({
});

interface IDispatchToProps {
}

interface IStateToProps {
    userChoices: any[];
}
export const mapStateToProps = (storeState: any) => ({
  userChoices: storeState.user.userChoice
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)
type StateProps = ReturnType<typeof mapStateToProps>;
type Dispatch = typeof mapDispatchToProps;


