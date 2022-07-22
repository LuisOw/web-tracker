import Layout from "../../components/layout/Layout";

export const FiltesPage = () => {
  const { token } = useContext(AuthContext);
  const { researchId } = useParams();
  const endpoint = `pesquisas/${researchId}/filtros`;
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState;

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setFilters(response);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <div className="page_container"></div>
    </Layout>
  );
};
