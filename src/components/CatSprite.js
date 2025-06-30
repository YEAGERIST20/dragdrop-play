import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

const cart = "https://cdn-icons-png.flaticon.com/512/743/743006.png";

const CatSprite = forwardRef((_, ref) => {
  const spriteRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [speech, setSpeech] = useState("");

  useImperativeHandle(ref, () => ({
    moveForward: (steps) => {
      setPosition((prev) => {
        const parent = spriteRef.current?.parentElement.getBoundingClientRect();
        const sprite = spriteRef.current?.getBoundingClientRect();
        const maxX = parent.width - sprite.width;
        return {
          ...prev,
          x: Math.min(prev.x + steps, maxX),
        };
      });
    },
    turn: (angle = 15) => {
      spriteRef.current.style.transform += ` rotate(${angle}deg)`;
    },
    say: (text) => {
      setSpeech(text);
      setTimeout(() => setSpeech(""), 2000);
    },
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;

      const parent = spriteRef.current.parentElement.getBoundingClientRect();
      const sprite = spriteRef.current.getBoundingClientRect();

      let newX = e.clientX - parent.left - offset.x;
      let newY = e.clientY - parent.top - offset.y;

      newX = Math.max(0, Math.min(newX, parent.width - sprite.width));
      newY = Math.max(0, Math.min(newY, parent.height - sprite.height));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => setDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const handleMouseDown = (e) => {
    const spriteBox = spriteRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - spriteBox.left,
      y: e.clientY - spriteBox.top,
    });
    setDragging(true);
  };

  return (
    <>
      {speech && (
        <div
          style={{
            position: "absolute",
            top: position.y - 40,
            left: position.x + 50,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "5px 10px",
            fontSize: "14px",
            zIndex: 20,
          }}
        >
          {speech}
        </div>
      )}
      <img
        src={cart}
        alt="cart"
        ref={spriteRef}
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "100px",
          height: "100px",
          cursor: "grab",
          userSelect: "none",
          zIndex: 10,
        }}
      />
    </>
  );
});

export default CatSprite;
