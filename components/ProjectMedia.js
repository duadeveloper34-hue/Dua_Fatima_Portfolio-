export default function ProjectMedia({ link }) {
  return (
    <div
      className="flex aspect-4/3 w-full items-center justify-center rounded-2xl border border-(--border)"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--bg-soft)), color-mix(in srgb, var(--accent-2) 14%, var(--bg-soft)))",
      }}
    >
      <img
        src={link}
        alt="Project preview"
        className="h-full rounded-2xl object-full"
      />
    </div>
  );
}