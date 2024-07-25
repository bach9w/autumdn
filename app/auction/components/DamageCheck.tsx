const DamageCheck = ({ damage }: { damage: any }) => {
  return (
    <div className="flex w-full items-center justify-center">
      {damage === "Front End" ? (
        "Повреда - Предна част"
      ) : damage === "Hail" ? (
        "Повреда - Градушка"
      ) : damage === "Damage History" ? (
        "Повреда - История с щети"
      ) : damage === "Rear End" ? (
        "Повреда - Задна част"
      ) : damage === "Water/Flood" ? (
        "Повреда - Наводнена"
      ) : damage === "Left Front" ? (
        "Повреда - Предна лява част"
      ) : damage === "Minor Dent/Scratches" ? (
        "Повреда - Драскотини"
      ) : damage === "Side" ? (
        "Повреда - Странична"
      ) : damage === "Mechanical" ? (
        "Повреда - Механична"
      ) : damage === "Missing/Altered Vin" ? (
        "Повреда - ЛИПСВАЩ/ПРОМЕНЕН VIN"
      ) : damage === "Undercarriage" ? (
        "Повреда - Ходова част"
      ) : damage === "Unknown" ? (
        "Повреда - Непозната"
      ) : damage === "Left Side" ? (
        "Повреда - Лява страна"
      ) : (
        <p>{damage}</p>
      )}
    </div>
  );
};

export default DamageCheck;
