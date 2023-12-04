import * as React from "react";
import type { MetaFunction } from "@remix-run/deno";
import maria from "../imgs/maria.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Соснина Мария Викторовна" },
    { name: "description", content: "Соснина Мария Викторовна, врач-психотерапевт, клинический психолог, практика с 2004г." },
  ];
};

export default function Index() {
  return (
    <div className="container max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <img className="max-w-xs rounded-lg" src={maria} />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Соснина Мария Викторовна</h1>
          <h2 className="text-lg">врач-психотерапевт, клинический психолог</h2>
          <h1 className="text-2xl">Практика с 2004г.</h1>
          <p>Для записи на первичную консультацию писать в Телеграмм или Wats app <strong>+79050890284</strong>.</p>
          <p>г. Томск, пр. Ленина 30, стр 2, 2 подъезд, 2 этаж, офис 19.</p>
        </div>
      </div>
    </div>
  );
}
