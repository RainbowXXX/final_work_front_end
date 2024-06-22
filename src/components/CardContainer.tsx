import { Card, Divider, Space } from 'antd';

const { Meta } = Card;

function CardContainer({name, children} : {name:string, children: any | undefined | null}) {
    return (
        <>
            <p>{name}</p>
            <Divider />
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                {children}
            </Space>
        </>
    )
}

export default CardContainer;