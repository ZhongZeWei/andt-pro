
import { Pie, yuan } from '@/components/Charts';
//导入网格布局组件
import GridContent from '@/components/PageHeaderWrapper/GridContent';
//导入行、列、卡片、工具提示等组件
import { Row, Col, Card, Tooltip } from 'antd';
//表格头部信息
import { formatMessage, FormattedMessage } from 'umi/locale';

export default class Doc3 extends React.Component {


    render() {
        // 具体的数据
        const salesPieData = [
            {
                x: '家用电器',
                y: 4544,
            },
            {
                x: '食用酒水',
                y: 3321,
            },
            {
                x: '个护健康',
                y: 3113,
            },
            {
                x: '服饰箱包',
                y: 2341,
            },
            {
                x: '母婴产品',
                y: 1231,
            },
            {
                x: '其他',
                y: 1231,
            },
        ];

        // 渲染的组件
        return (
            // 设置一个网格布局
            <GridContent>
                {/* 设置一行 */}
                <Row gutter={24}>
                   {/* 设置一列 */}
                    <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        {/* 设置卡片，最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。 */}
                        <Card
                            title={
                                <FormattedMessage
                                    id="app.monitor.trading-activity"
                                    defaultMessage="Real-Time Trading Activity"
                                />
                            }
                            bordered={false}
                        >
                            <Pie
                                hasLegend
                                title="销售额"
                                subTitle="销售额1"
                                animate='true'
                                total={() => (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))
                                        }}
                                    />
                                )}
                                data={salesPieData}
                                valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                                height={294}
                            />
                        </Card>
                    </Col>

                    <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        {/* 设置卡片，最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。 */}
                        <Card
                            title={
                                <FormattedMessage
                                    id="app.monitor.trading-activity"
                                    defaultMessage="Real-Time Trading Activity"
                                />
                            }
                            bordered={false}
                        >
                            <Pie
                                hasLegend
                                title="销售额"
                                subTitle="销售额1"
                                animate='true'
                                total={() => (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))
                                        }}
                                    />
                                )}
                                data={salesPieData}
                                valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                                height={294}
                            />
                        </Card>
                    </Col>



                </Row>
            </GridContent>

        );
    }
}
