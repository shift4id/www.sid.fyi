const formatDate = function (date: string, dateStyle?: "short" | "long"): string {
  return new Date(date).toLocaleString("en-US", { dateStyle: dateStyle || "long", timeZone: "GMT" });
};

export default formatDate;
