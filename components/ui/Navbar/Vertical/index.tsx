import React from 'react';
import Icons from '../../Icons';
import Layout from '../../Layout';
import { VerticalProps } from './interfaces';
import Styled from './styled';


const Vertical: React.FC<VerticalProps> = (): React.ReactElement => {
  return(
    <Styled.Container>
      <Layout.Row flexDirection='column'>
        <Layout.Column>
          <Styled.MenuItem>
            <Styled.IconContainer>
              <Icons.Stack3D /> 
            </Styled.IconContainer>
            Inbox
          </Styled.MenuItem>
        </Layout.Column>
        <Layout.Column>
          <Styled.MenuItem><Icons.Stack3D /> Draft</Styled.MenuItem>
        </Layout.Column>
        <Layout.Column>
          <Styled.MenuItem><Icons.Stack3D /> Starred</Styled.MenuItem>
        </Layout.Column>
        <Layout.Column>
          <Styled.MenuItem><Icons.Stack3D /> Sent</Styled.MenuItem>
        </Layout.Column>
        <Layout.Column>
          <Styled.MenuItem><Icons.Stack3D /> Trash</Styled.MenuItem>
        </Layout.Column>
        <Layout.Column>
          <Styled.MenuItem><Icons.Stack3D /> Spam</Styled.MenuItem>
        </Layout.Column>
      </Layout.Row>
    </Styled.Container>
  );
};

export default Vertical;
