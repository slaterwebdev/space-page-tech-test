import fallback from "@/assets/fallback.png";

export default {
  methods: {
    formatDate(dateString) {
      const [year, month, day] = dateString.split(" ")[0].split("-");
      return `${day}/${month}/${year}`;
    },
    formatHighlights(highlights) {
      return highlights
        .sort(
          (a, b) =>
            new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt)
        )
        .map(
          ({
            name,
            date,
            createdAt,
            image,
            description,
            info,
            news,
            id,
            ...rest
          }) => ({
            // Default properties
            name: name || "Unknown",
            date: this.formatDate(date || createdAt) || "No Date",
            image: image || fallback,
            description: description || info || "No Description",
            id: id,
            // Optional properties
            ...(news && {
              news: {
                title: news.title,
                ...(news.date && { date: this.formatDate(news.date) }),
              },
            }),
            // extra properties
            extraProperties: Object.entries(rest).map(([key, value]) => ({
              key,
              value,
            })),
          })
        );
    },
  },
};
