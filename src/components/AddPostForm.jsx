import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/myInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addPost } from "../store/reducers/PostsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      dispatch(addPost(values));
      values.title = '';
      values.body = '';
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <MyInput
        id="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        type={"text"}
        placeholder={"Название поста"}
      />
      <MyInput
        id="body"
        name="body"
        value={formik.values.body}
        onChange={formik.handleChange}
        type={"text"}
        placeholder={"Описание поста"}
      />
      <MyButton disabled={false} title={"Добавить пост"} type={"submit"} />
    </form>
  );
};

export default AddPostForm;
