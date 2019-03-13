import React from 'react';
import { Form, Input, Row, Col, DatePicker, Tabs, Button, Icon } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import styled from '@emotion/styled';

import useMedia from '@hooks/useMedia';
import CreatePartyLocation from './CreateParty/CreatePartyLocation';

const CreatePartyFormWrapper = styled.div`
  max-width: 1440px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: white;
  min-height: calc(100vh - 64px);
  margin: 0 auto;
`;

const CreateParty: React.FC = () => {
  const isBreakingTheGrid = useMedia('(max-width:992px)');
  return (
    <CreatePartyFormWrapper>
      <Form layout="horizontal">
        <Row gutter={32}>
          <Col lg={{ span: 12 }} sm={{ span: 24 }}>
            <Form.Item>
              <Input
                size="large"
                placeholder="Name your party"
                prefix={<Icon type="form" />}
              />
            </Form.Item>
            <Form.Item>
              <DatePicker.RangePicker
                showTime={true}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          {!isBreakingTheGrid && (
            <Col lg={{ span: 12 }} sm={{ span: 24 }}>
              <Button type="primary" size="large">
                Save
              </Button>
            </Col>
          )}
        </Row>

        <Row gutter={32}>
          <Col lg={{ span: 12 }} sm={{ span: 24 }}>
            <Form.Item>
              <Tabs defaultActiveKey="1" onChange={() => {}}>
                <Tabs.TabPane tab="Informations" key="1">
                  <CreatePartyLocation />
                  <FormItem>
                    <TextArea
                      placeholder="Add description"
                      autosize={{ minRows: 4 }}
                    />
                  </FormItem>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Find Time" key="2">
                  Content of Tab Pane 2
                </Tabs.TabPane>
              </Tabs>
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} sm={{ span: 24 }}>
            <Form.Item>
              <Tabs defaultActiveKey="1" onChange={() => {}}>
                <Tabs.TabPane tab="Invite friends" key="1">
                  <Input
                    placeholder="Search your friends"
                    prefix={<Icon type="team" />}
                  />
                </Tabs.TabPane>
              </Tabs>
            </Form.Item>
          </Col>
        </Row>
        {isBreakingTheGrid && (
          <FormItem>
            <Button type="primary" block={true}>
              Save
            </Button>
          </FormItem>
        )}
      </Form>
    </CreatePartyFormWrapper>
  );
};

export default CreateParty;
