import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "./store/question-reducer";

const Question = () => {

    const ques=useSelector((state)=>state.question.question)
  const dispatch = useDispatch();
  let arr = [1, 2, 3, 4, 5];

  if (arr.length > 1) {
    dispatch(questionActions.arrLengthGreater());
  } else {
    dispatch(questionActions.arrLengthLess());
  }


  console.log('rendering question')

  return <div>{ques?'TRUE':'FALSE'}</div>;
};

export default Question;
