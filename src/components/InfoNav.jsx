export default function InfoNav() {
  return (
    <div className="sticky top-0">
      <div className="h-2 w-full bg-sky-blue"></div>
      <div className="bg-sky-blue text-white-40 font-bold h-[35px] leading-[35px]">
        <div className="flex justify-around text-center">
          <input
            id="outbound"
            value="outbound"
            class="peer/outbound hidden"
            type="radio"
            name="round"
            checked
          />
          <label
            for="outbound"
            class="w-[50%] pb-1 peer-checked/outbound:text-blue-100 peer-checked/outbound:bg-white-100 peer-checked/outbound:rounded-t-lg"
          >
            往 捷運東門站
          </label>

          <input
            id="inbound"
            value="inbound"
            class="peer/inbound hidden"
            type="radio"
            name="round"
          />
          <label
            for="inbound"
            class="w-[50%] pb-2 peer-checked/inbound:text-blue-100 peer-checked/inbound:bg-white-100 peer-checked/inbound:rounded-t-lg"
          >
            往 萬芳社區
          </label>
        </div>
      </div>
    </div>
  );
}
