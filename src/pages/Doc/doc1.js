import {Table }from 'antd';
import {queryBaseCity} from '../../services/doc';

export default class Doc1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['descend'],
            }, {
                title: 'Age',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'phone',
                dataIndex: 'phone',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.phone - b.phone,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                filters: [{
                    text: 'London',
                    value: 'London',
                }, {
                    text: 'New York',
                    value: 'New York',
                }],
                filterMultiple: false,
                onFilter: (value, record) => record.address.indexOf(value) === 0,
                sorter: (a, b) => a.address.length - b.address.length,
                sortDirections: ['descend', 'ascend']
            }]
        }
    }

    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }

    componentDidMount() {
      queryBaseCity().then(res => {
          if (res.flag) {
              this.setState({
                    dataSource: res.data.rows.map((item, index) => {
                        return {
                            key: index,
                            name: item.name,
                            age: item.age,
                            address: item.address,
                            phone: 1357486 + this.createRentomNum()
                        }
                    })
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    createRentomNum = () => {
        var num = "";
        for (var i = 0; i < 4; i++) {
            num += Math.floor(Math.random() * 10);
        }
        return num;
    }

    render() {
        // 渲染的组件
        return (
            <Table columns={this.state.columns} dataSource={this.state.dataSource} onChange={this.onChange} />
        );
    }
}
