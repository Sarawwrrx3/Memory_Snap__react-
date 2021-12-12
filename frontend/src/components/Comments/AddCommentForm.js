import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addOneComment } from "../../store/comments";
import "./comments.css";

function AddCommentForm() {
    const { commentID } = useParams();
    const dispatch = useDispatch();

    const [comment, setComment] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

        const validComment = (e) => setComment(e.target.value);


    const photos = useSelector((state) => state.photos.photo);
    const photoID = photos?.photos[commentID - 1].commentID;
    const userID = useSelector((state) => state?.session?.users?.id);

    //error
    useEffect(() => {
        const errors = [];

        if (comment.length > 500)
            errors.push("Comment must be less than 500 characters");
        setValidationErrors(errors);
    }, [comment]);

    const reset = () => {
        setComment("");
    };

    // async needed? 
    const submitComment = (event) => {
        event.preventDefault();
        event.target.reset();
        const payload = {
            comment,
            photoID,
            userID,
        };

        reset();
        dispatch(addOneComment(payload));
    };

    return (
        <div className="comment-main-container">
            <div class="wrapper">
                <form class="comment-form" onSubmit={submitComment}>
                    <label class="pageTitle title">Add Your Comment: </label>

                    <textarea
                        onChange={(event) => setComment(event.target.value)}
                        class="message formEntry"
                        placeholder=" Your Comments"
                        value={comment}
                    ></textarea>

                    <button class="submit formEntry" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddCommentForm;
