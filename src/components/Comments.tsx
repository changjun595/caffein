import { IComment } from "../types/type";

const Comments = ({comment} : { comment : IComment}) => {
    return(
        <div>
            <div>{comment.nickname}</div>
            <div>{comment.content}</div>
        </div>
    )
}
export default Comments;