import { Datagrid, List, ReferenceField, TextField, SimpleList, FunctionField } from 'react-admin';

const PostPanel = () => {
    return <div>Hello</div>
}

const PostList = () => (
    <List>
        <Datagrid
            expand={<PostPanel />}
            sx={{
                '.RaDatagrid-headerCell': {
                    padding: '16px'
                }
            }}>
            <TextField source="id" />
            <TextField source="title" label="Post Title" />
            <FunctionField
                label="Excerpt"
                render={(record) => `${record.body.substring(0, 90)}...`}
            />
            <ReferenceField source='usedId' reference='users' />
        </Datagrid>
    </List>
);

export default PostList; 