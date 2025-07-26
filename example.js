```javascript
const url = 'http://localhost:8084/api/auth/roles';

useEffect(() => {
    const fetchRoles = async () => {
        try {
            const response = await axios.get(url);
            console.log('Roles obtenidos:', response.data.roles);
            setRolesEnum(response.data.roles);
        } catch (error) {
            console.error('Error al obtener los roles:', error);
            setError('No se pudieron cargar los roles. Intenta nuevamente más tarde.');
        }
    };
    fetchRoles();
}, []);
```