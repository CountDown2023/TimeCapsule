import React, { useState } from "react";
import styles from "./CapsuleInput.module.scss";

export type Form = {
  title: string;
  mySelf: string;
};

type Props = {
  onSubmit: (form: {
    title: string;
    mySelf: string;
    content: string[];
  }) => void;
};

const CapsuleInputView = ({ onSubmit }: Props) => {
  const [form, setForm] = useState<Form>({
    title: "",
    mySelf: "",
  });

  const [contentList, setContentList] = useState<string[]>([]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <button
        className={styles.submitButton}
        onClick={() => {
          onSubmit({ ...form, content: contentList });
        }}
      >
        작성완료
      </button>

      <div className={styles.form}>
        <input
          className={styles.name}
          name="title"
          value={form.title}
          type="text"
          onChange={onChange}
          placeholder="캡슐 이름을 입력하세요."
        />

        <div className={styles.content}>
          <div className={styles.description}>이루고싶은 목표를 적어보세요</div>
          {contentList.map((item, index) => {
            return (
              <textarea
                key={index}
                value={item}
                onChange={(e) =>
                  setContentList(
                    contentList.map((content, idx) =>
                      index === idx ? e.target.value : content
                    )
                  )
                }
                placeholder="매일 1시간 운동하기"
              />
            );
          })}
          <div
            className={styles.addContent}
            onClick={() => {
              setContentList([...contentList, ""]);
            }}
          >
            + 추가하기
          </div>
        </div>

        <textarea
          className={styles.mySelf}
          name="mySelf"
          value={form.mySelf}
          onChange={onChange}
          placeholder="12월 31일의 나에게 한마디"
        />
      </div>
    </>
  );
};

export default CapsuleInputView;
